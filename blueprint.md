# Project Blueprint

## Overview

A simple student dashboard application that displays the user's GPA and a list of their courses.

## Styling and Component Library

This project uses a combination of Material-UI and Tailwind CSS for styling and UI components.

*   **Material-UI:** Used for core UI components like `Card`, `CardContent`, `Typography`, `CircularProgress`, `List`, `ListItem`, `ListItemText`, `ListItemAvatar`, and `Avatar`.
*   **Tailwind CSS:** Used for utility-first styling, including colors, spacing, and layout.

## Implemented Features

*   **GPA Display:** The application fetches and displays the user's GPA. The GPA value is color-coded based on its value:
    *   `>= 3.5`: Green
    *   `>= 3.0`: Yellow
    *   `< 3.0`: Red
*   **Loading State:** A loading indicator is displayed while the GPA is being fetched.
*   **Courses List:** The application displays a list of the student's courses, including the course name, code, and grade.
