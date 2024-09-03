import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Example dataset with features: [blood_type_match, hla_match, organ_size_difference, donor_age, recipient_age]
# 1 indicates a match, and 0 indicates no match.
# Labels: 1 for compatible, 0 for not compatible.
data = np.array([
    [1, 1, 0.1, 45, 50, 1],  # Compatible
    [1, 0, 0.3, 35, 40, 0],  # Not compatible
    [0, 1, 0.2, 55, 60, 0],  # Not compatible
    [1, 1, 0.05, 30, 32, 1], # Compatible
    [0, 0, 0.4, 60, 65, 0],  # Not compatible
    [1, 1, 0.15, 40, 45, 1], # Compatible
])

# Split the dataset into features and labels
X = data[:, :-1]  # Features: [blood_type_match, hla_match, organ_size_difference, donor_age, recipient_age]
y = data[:, -1]   # Labels: Compatibility (1 or 0)

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create and train the logistic regression model
model = LogisticRegression()
model.fit(X_train, y_train)

# Predict compatibility for the test set
y_pred = model.predict(X_test)

# Evaluate the model
print(f'Accuracy: {accuracy_score(y_test, y_pred)}')
print(classification_report(y_test, y_pred))

# Example: Checking compatibility for a new donor-recipient pair
new_case = np.array([[1, 1, 0.08, 46, 49]])  # Example features for a new case
prediction = model.predict(new_case)

if prediction[0] == 1:
    print("The organ is compatible with the recipient.")
else:
    print("The organ is not compatible with the recipient.")
