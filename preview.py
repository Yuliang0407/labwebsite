#!/usr/bin/env python3
"""Serve this website locally without deploying changes."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parent


class PreviewHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Support existing extensionless links such as /home and /research.
        path = urlsplit(self.path).path
        candidate = ROOT / (unquote(path).lstrip('/') + '.html')
        if not Path(path).suffix and candidate.is_file():
            self.path = path + '.html'
        super().do_GET()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()


if __name__ == '__main__':
    handler = partial(PreviewHandler, directory=str(ROOT))
    server = ThreadingHTTPServer(('127.0.0.1', 8000), handler)
    print('Local preview: http://127.0.0.1:8000/team.html', flush=True)
    print('Save edits, then refresh your browser. Press Ctrl+C to stop.', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
