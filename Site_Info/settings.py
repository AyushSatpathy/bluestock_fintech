INSTALLED_APPS = [
    'corsheaders',

]
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # Your frontend URL
]
CORS_ALLOWED_ORIGINS = [
    "http://127.0.0.1:5500",  # Adjust based on where your frontend is served
]
