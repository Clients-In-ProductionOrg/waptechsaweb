
import os
import time

target = r'h:\WORK SERIOUS PROJECT\WapTechSa.com\waptechs-sa\src\pages\index.jsx'
new_file = r'h:\WORK SERIOUS PROJECT\WapTechSa.com\waptechs-sa\src\pages\IndexNew.jsx'

if os.path.exists(target):
    try:
        os.remove(target)
        print(f"Removed {target}")
    except Exception as e:
        print(f"Error removing {target}: {e}")

if os.path.exists(new_file):
    try:
        os.rename(new_file, target)
        print(f"Renamed {new_file} to {target}")
    except Exception as e:
        print(f"Error renaming: {e}")
