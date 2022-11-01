from django.urls import path
from .views import DetailRecipeView, LikedRecipeView, ListRecipeView, ManageRecipeView, SearchRecipeView


urlpatterns = [
    path('manage-recipe/', ManageRecipeView.as_view()),
    path('get-all-recipes/', ListRecipeView.as_view()),
    path('get-recipe/<recipe_slug>/', DetailRecipeView.as_view()),
    path('filter/', SearchRecipeView.as_view()),
    path('like/', LikedRecipeView.as_view())
]