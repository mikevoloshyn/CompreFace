import functools

from src.api.exceptions import NoFileAttachedError, \
    NoFileSelectedError


def needs_attached_file(f):
    @functools.wraps(f)
    def wrapper(*args, **kwargs):
        from flask import request

        if 'file' not in request.files:
            raise NoFileAttachedError

        file = request.files['file']
        if file.filename == '':
            raise NoFileSelectedError

        return f(*args, **kwargs)

    return wrapper
