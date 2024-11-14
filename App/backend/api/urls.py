from django.urls import path
from . import views

urlpatterns = [
    path('stock-items/', views.StockItemList.as_view(), name='stock-item-list'),
]