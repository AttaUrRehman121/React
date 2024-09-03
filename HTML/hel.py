try:
    import numpy as np
except ImportError:
    print("Please install numpy using 'pip install numpy'")
from sklearn.neighbors import KNeighborsClassifier

# Example list of items with features (e.g., price, weight, rating)
# Each item is represented as a list of features
items = [
    [10.5, 0.5, 4.7],  # Item 1: [price, weight, rating]
    [15.0, 0.6, 4.5],  # Item 2
    [12.0, 0.55, 4.8], # Item 3
    [9.0, 0.4, 4.1],   # Item 4
    [18.0, 0.7, 4.9],  # Item 5
]

# Labels for each item (optional, depending on use case)
labels = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

# New item to compare with the list
new_item = [11.0, 0.5, 4.6]

# Create a KNN classifier
knn = KNeighborsClassifier(n_neighbors=1)

# Fit the model
knn.fit(items, labels)

# Predict the most similar item
predicted_item = knn.predict([new_item])

print(f'The most similar item to the new item is: {predicted_item[0]}')

# Calculate distances to understand how close items are
distances, indices = knn.kneighbors([new_item])

print(f'Distances to the closest items: {distances[0]}')