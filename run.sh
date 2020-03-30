#!/bin/bash

cd react_frontend
npm run build
cd ../flask_backend
xdg-open http://localhost:5000
python3 app.py
