from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse
from django.forms.models import model_to_dict
from .models import Task
from .forms import TaskForm
# Create your views here.

def homepage(request):
    return redirect('basicapp:tasks_list')


def tasks_list(request):
    tasks = Task.objects.all()
    if request.method=="POST":
        form=TaskForm(request.POST)
        if form.is_valid():
            
            new_task=form.save()

            #return redirect('tasks_list')
            return JsonResponse({'task':model_to_dict(new_task)},status=200)
            
    else:
         form=TaskForm()
    return render(request, 'task_list.html',context={'form':form,'tasks':tasks})


def tasks_delete(request,id):
    
    task = get_object_or_404(Task, id=id)
    
    task.delete()
            
    return JsonResponse({'bool': True, })
