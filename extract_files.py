import json
import os

transcript_path = "/home/mobile_dev/.gemini/antigravity-ide/brain/b9426448-dec3-40b8-bbdf-d2c74cc48910/.system_generated/logs/transcript_full.jsonl"
output_dir = "restored_src"
os.makedirs(output_dir, exist_ok=True)

files = {}

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'PLANNER_RESPONSE':
                for tool_call in data.get('tool_calls', []):
                    if tool_call.get('name') in ('write_to_file', 'default_api:write_to_file'):
                        args = tool_call.get('args', {})
                        target = args.get('TargetFile')
                        content = args.get('CodeContent')
                        
                        # Only get files that were in the original Phase 1 (i.e. we don't want the tailwind config)
                        if target and 'src/' in target and 'tailwind' not in target:
                            # We want the LAST version before the Tailwind rewrite.
                            # Since we just want the version from Phase 1, we can check if it contains Tailwind classes.
                            # A simple heuristic: if it has "className="w-full" or similar tailwind stuff, skip it.
                            # Or better, we can just save all versions and pick the first one we see, or last one before a certain time.
                            files.setdefault(target, []).append(content)
        except:
            pass

for target, contents in files.items():
    # We want the LAST version before the Tailwind rewrite.
    # The Tailwind rewrite started with a new implementation plan, then we overwrote files.
    # So the *first* version in the list is the original one!
    # Wait, if we edited it multiple times in Phase 1, we want the last one from Phase 1.
    # Let's just dump all versions for each file into the restored directory with a version suffix.
    filename = os.path.basename(target)
    for i, content in enumerate(contents):
        with open(os.path.join(output_dir, f"{filename}.v{i}"), "w") as out:
            out.write(content)

print(f"Extracted {len(files)} files to {output_dir}")
