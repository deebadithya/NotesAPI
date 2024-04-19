TO RUN THE PROJECT:

MAKE TWO TERMINALS ONE FOR FRONTEND AND ANOTHER FOR BACKEND

On frontend/

 - Make active directory to frontend/
 - Run cmd npm install vite@latest --template react
 - npm install
 - npm run dev

On backend/

  # creating a virtual environment for the backend.
 - python -m venv .venv
  # activating the virtual environment.
 - .venv/Scripts/Activate.ps1
  # install dependencies onto the virtual environment.
 - pip install -r requirements.txt
 - python manage.py makemigrations
 - python manage.py migrate
 - python manage.py runserver

 To add baseURL of backend onto the frontend

 frontend/.env
