# project-react-python
 
python -m venv venv
cd venv/scripts
activate
django-admin startproject backend
pip install djangorestframework

python manage.py migrate
python manage.py createsuperuser --email admin@example.com --username admin