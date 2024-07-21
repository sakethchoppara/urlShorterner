from django.db import models
import random
import string


class URLID(models.Field):
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 12  # Adjust length as needed
        kwargs['unique'] = True
        super().__init__(*args, **kwargs)

    def db_type(self,connection) :
        return 'varchar(100)'

    def from_db_value(self,value,connection,expression):
        return value

    def generate_unique_id(self):
        # Combine a timestamp with a random string
        random_str = ''.join(random.choices(string.ascii_letters + string.digits, k=6))
        return random_str

    def pre_save(self, model_instance, add):
        if add and not getattr(model_instance, self.attname):
            value = self.generate_unique_id()
            setattr(model_instance, self.attname, value)
            return value
        return super().pre_save(model_instance, add)



class Url(models.Model):
    url = models.CharField(max_length=500)
    urlId = URLID(primary_key=True)

# Create your models here.
