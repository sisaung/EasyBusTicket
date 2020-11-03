from django.db import models

# Before Sale Statements................................................................


# 1
class Operators(models.Model):
    operators_name=models.CharField(max_length=250)
    date=models.DateField()
    class_type=models.CharField(max_length=250)
    depature_time=models.TimeField()
    arrival_time=models.TimeField()
    nationality=models.CharField(max_length=250)
    selled_seats=models.CharField(max_length=500,blank=True)
    available_seat=models.IntegerField()
    browse_route=models.CharField(max_length=250)
    day_night=models.CharField(max_length=250)
    images=models.TextField()

    class Meta:
        ordering=('id',)
    def save(self, *args, **kwargs):
        super(Operators, self).save(*args, **kwargs)
    def __str__(self):
        return '%s' % (self.operators_name)




# 2

class Routes(models.Model):
    operators=models.ForeignKey(Operators, related_name="Routes_id", on_delete=models.CASCADE)
    source=models.CharField(max_length=250)
    destination=models.CharField(max_length=250)
    price=models.IntegerField()
    class Meta:
        ordering=('id',)
    def save(self, *args, **kwargs):
        super(Routes, self).save(*args, **kwargs)



class Sale_Tickets(models.Model):
    traveller_name=models.CharField(max_length=250)
    gender=models.CharField(max_length=250)
    email=models.EmailField(max_length=250)
    phone_no=models.CharField(max_length=250)
    note=models.CharField(max_length=500)
    busId=models.CharField(max_length=250)
    busname=models.CharField(max_length=250)
    route=models.CharField(max_length=250)
    depaturetime=models.CharField(max_length=500)
    arrivaltime=models.CharField(max_length=500)
    seatnumbers=models.CharField(max_length=500)
    subtotal=models.CharField(max_length=500)
    buyingdate=models.DateField(auto_now_add=True)
    class Meta:
        ordering=('id',)
    def save(self, *args, **kwargs):
        super(Sale_Tickets, self).save(*args, **kwargs)








# contact......................................................................................

class Contact(models.Model):
    traveller_name=models.CharField(max_length=250)
    email=models.EmailField(max_length=250)
    phone=models.CharField(max_length=250)
    message=models.TextField()
    date=models.DateField(auto_now_add=True)

    class Meta:
        ordering=('id',)
    def save(self, *args, **kwargs):
        super(Contact, self).save(*args, **kwargs)
