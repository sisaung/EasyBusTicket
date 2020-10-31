from django.db import models

# Register Statement........................................................................
class Register(models.Model):
    first_name=models.CharField(max_length=240)
    last_name=models.CharField(max_length=240)
    Email=models.EmailField(max_length=240,unique=True)
    password=models.CharField(max_length=50)
    confirm_password=models.CharField(max_length=50)

    class Meta:
        ordering=('id',)
    def save(self, *args, **kwargs):
        super(Register, self).save(*args, **kwargs)



class SignIn(models.Model):
    email=models.EmailField(max_length=240,unique=True)
    password=models.CharField(max_length=50)

    class Meta:
        ordering=('id',)
    def save(self, *args, **kwargs):
        super(SignIn, self).save(*args, **kwargs)

# Before Sale Statements................................................................


# 1
class Operators(models.Model):
    operators_name=models.CharField(max_length=250)
    class_type=models.CharField(max_length=250)
    date=models.DateField()
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
class Seats(models.Model):
    operators=models.ForeignKey(Operators, related_name="Seats_id", on_delete=models.CASCADE)
    seat_no=models.CharField(max_length=500)
    status=models.CharField(max_length=250)
    class Meta:
        ordering=('id',)
    def save(self, *args, **kwargs):
        super(Seats, self).save(*args, **kwargs)
    def __str__(self):
        return '%d %s' % (self.seat_no, self.status)

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


# class Operators_route(models.Model):
#     operator_id=models.ForeignKey(Operators,related_name="operators_route_id", on_delete=models.CASCADE)
#     route_id=models.ForeignKey(Routes,related_name="operators_route_id", on_delete=models.CASCADE)
#     class Meta:
#         ordering=('id',)
#     def save(self, *args, **kwargs):
#         super(Operators_route, self).save(*args, **kwargs)
# After Sale............................................................................






# Bus Station......................................................................................

class Bus_Stations(models.Model):
    bus=models.CharField(max_length=250)
    city=models.CharField(max_length=250)
    address=models.CharField(max_length=250)
    phone=models.CharField(max_length=250)

    class Meta:
        ordering=('id',)
    def save(self, *args, **kwargs):
        super(Bus_Stations, self).save(*args, **kwargs)

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
