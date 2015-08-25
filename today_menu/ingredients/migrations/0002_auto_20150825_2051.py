# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ingredients', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='ingredient',
            name='description',
            field=models.CharField(default=None, max_length=250),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='ingredient',
            name='name',
            field=models.CharField(default='', max_length=250),
            preserve_default=False,
        ),
    ]
