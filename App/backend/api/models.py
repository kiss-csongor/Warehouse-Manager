from django.db import models

# Create your models here.

from django.db import models

class StockItem(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return self.name