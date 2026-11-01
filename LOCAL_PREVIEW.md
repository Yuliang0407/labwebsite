# Local website preview

Double-click `Start Preview.command`, then open http://127.0.0.1:8000/team.html in your browser. Keep the Terminal window open while previewing.

Alternatively, run `python3 preview.py` from this folder.

Edit the HTML pages or `static/css/style.css`, save, and refresh the browser to see changes immediately. Your profile is at http://127.0.0.1:8000/malcolm_ho.html.

The existing Bootstrap, jQuery, and Popper versions are stored in `static/vendor`, so the pages can load offline. Links to external websites still require internet access.

The preview listens only on your computer. Nothing is uploaded or deployed. Publishing remains a separate Git push and merge step.

Press Control+C in the Terminal window to stop the preview. If port 8000 is already in use, use the preview already running there or stop it before restarting.
