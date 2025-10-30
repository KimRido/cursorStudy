function addTodo(text) {
    // 유효성 검증: text가 존재하고, 문자열이며, 비어있지 않은지 확인
    if (typeof text !== 'string' || text.trim() === '') {
        alert('할 일을 입력해주세요.');
        return;
    }
    const todo = document.createElement('div');
    todo.textContent = text.trim();
    todo.classList.add('todo-item');
    // 완료 토글: 클릭 시 completed 클래스 토글
    todo.addEventListener('click', function () {
        todo.classList.toggle('completed');
    });
    const list = document.getElementById('todo-list');
    if (list) {
        list.appendChild(todo);
    } else {
        document.body.appendChild(todo);
    }
}

//완료된 할 일들만 필터링 하는 함수
function filterCompletedTodos() {
    const todos = document.querySelectorAll('.todo-item');
    todos.forEach(todo => {
        if (todo.classList.contains('completed')) {
            todo.style.display = 'block';
        } else {
            todo.style.display = 'none';
        }
    });
}

// TodoApp 초기화: 입력/버튼 이벤트 바인딩 및 필터 동작 구성
function TodoApp() {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const filterAllBtn = document.getElementById('filter-all');
    const filterCompletedBtn = document.getElementById('filter-completed');

    if (!input || !addBtn || !filterAllBtn || !filterCompletedBtn) {
        return;
    }

    function showAllTodos() {
        const todos = document.querySelectorAll('.todo-item');
        todos.forEach(todo => {
            todo.style.display = 'block';
        });
    }

    addBtn.addEventListener('click', function () {
        const value = input.value;
        addTodo(value);
        input.value = '';
        input.focus();
    });

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const value = input.value;
            addTodo(value);
            input.value = '';
        }
    });

    filterAllBtn.addEventListener('click', function () {
        showAllTodos();
    });

    filterCompletedBtn.addEventListener('click', function () {
        filterCompletedTodos();
    });
}

// 전역에서 접근 가능하도록 내보내기
window.TodoApp = TodoApp;
