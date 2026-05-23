import React, { useReducer } from 'react';

// 1. Khai báo state ban đầu
const initialState = { count: 0 };

// 2. Định nghĩa hàm reducer
const reducer = (state, action) => {
    debugger
    switch (action.type) {
        case 'tang':
            return { count: state.count + 1 };
        case 'giam':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error('Action không hợp lệ');
    }
};

function App() {
// 3. Sử dụng useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Số lượng: {state.count}</p>

            {/* 4. Gửi các action thông qua dispatch */}
            <button onClick={() => dispatch({ type: 'tang' })}>Tăng</button>
            <button onClick={() => dispatch({ type: 'giam' })}>Giảm</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default App;