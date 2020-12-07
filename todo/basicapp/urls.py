from django.urls import path
from . import views

# SET THE NAMESPACE!
app_name = 'basicapp'

urlpatterns = [
    
    path('', views.tasks_list,name='tasks_list'),
    path('<str:id>/delete/', views.tasks_delete,name='tasks_delete'),
]
