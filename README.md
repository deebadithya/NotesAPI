TO RUN THE PROJECT:

MAKE TWO TERMINALS ONE FOR FRONTEND AND ANOTHER FOR BACKEND

# On frontend/

 - Run cmd npm install vite@latest --template react
 - npm install
 - npm run dev

# On backend/

  -creating a virtual environment for the backend.
  -- python -m venv .venv
  - activating the virtual environment.
  -- .venv/Scripts/Activate.ps1
  - install dependencies onto the virtual environment.
  -- pip install -r requirements.txt
  - django neccessary commands.
  -- python manage.py makemigrations
  -- python manage.py migrate
  -- python manage.py runserver

# To add baseURL of backend onto the frontend

on frontend/.env    -- create one if its not there. 
 - VITE_API_URL = "django localhost url"     ex: "http://127.0.0.1:8000/"
  
