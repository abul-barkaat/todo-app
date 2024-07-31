document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    // Add a new task
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = input.value.trim();
        if (taskText) {
            // Create new list item
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', () => {
                listItem.remove();
            });

            listItem.appendChild(deleteButton);
            list.appendChild(listItem);

            // Clear input field
            input.value = '';
        }
    });
});
