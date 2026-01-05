from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard
from django.utils import timezone

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Clear existing data
        # Delete in child-to-parent order to avoid reference issues (workaround for Djongo ObjectIdField bug)
        for obj in Activity.objects.all():
            if getattr(obj, 'id', None):
                obj.delete()
        for obj in Workout.objects.all():
            if getattr(obj, 'id', None):
                obj.delete()
        for obj in Leaderboard.objects.all():
            if getattr(obj, 'id', None):
                obj.delete()
        for obj in User.objects.all():
            if getattr(obj, 'id', None):
                obj.delete()
        for obj in Team.objects.all():
            if getattr(obj, 'id', None):
                obj.delete()

        # Create Teams
        marvel = Team(name='Marvel', description='Marvel Superheroes')
        marvel.save()
        dc = Team(name='DC', description='DC Superheroes')
        dc.save()

        # Create Users
        users = []
        users.append(User(email='tony@stark.com', username='Iron Man', team=marvel, is_superhero=True))
        users.append(User(email='steve@rogers.com', username='Captain America', team=marvel, is_superhero=True))
        users.append(User(email='bruce@wayne.com', username='Batman', team=dc, is_superhero=True))
        users.append(User(email='clark@kent.com', username='Superman', team=dc, is_superhero=True))
        for user in users:
            user.save()

        # Create Activities
        Activity.objects.create(user=users[0], activity_type='Running', duration_minutes=30, date=timezone.now())
        Activity.objects.create(user=users[1], activity_type='Cycling', duration_minutes=45, date=timezone.now())
        Activity.objects.create(user=users[2], activity_type='Swimming', duration_minutes=60, date=timezone.now())
        Activity.objects.create(user=users[3], activity_type='Yoga', duration_minutes=20, date=timezone.now())

        # Create Workouts
        w1 = Workout(name='Super Strength', description='Strength workout for superheroes')
        w1.save()
        w2 = Workout(name='Flight Training', description='Aerobic workout for flying heroes')
        w2.save()
        w1.suggested_for.set([users[0], users[2]])
        w2.suggested_for.set([users[1], users[3]])

        # Create Leaderboards
        Leaderboard.objects.create(team=marvel, total_points=150)
        Leaderboard.objects.create(team=dc, total_points=120)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data!'))
