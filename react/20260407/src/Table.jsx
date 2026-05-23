export default () => {

    const columns = [
        {
            value: 'id',
            text: 'ID',
            styles: {
                textAlign: 'left',
            }
        },
        {
            value: 'name',
            text: 'Ten',
            styles: {
                color: 'red',
            }
        },
        {
            value: 'age',
            text: 'Tuoi'
        },
        {
            value: 'class',
            text: 'Lop'
        },
        {
            value: 'address',
            text: 'Dia CHi'
        },
        {
            value: 'action',
            text: 'Dia CHi'
        }
    ]

    const students = [
        { id: 1, name: "Nguyen Van A", age: 15, class: "10A1", address: "Ha Noi" },
        { id: 2, name: "Tran Thi B", age: 16, class: "10A2", address: "Hai Phong" },
        { id: 3, name: "Le Van C", age: 15, class: "10A1", address: "Da Nang" },
        { id: 4, name: "Pham Thi D", age: 17, class: "11A1", address: "Ha Noi" },
        { id: 5, name: "Hoang Van E", age: 16, class: "10A3", address: "Nam Dinh" },
        { id: 6, name: "Do Thi F", age: 15, class: "10A2", address: "Thai Binh" },
        { id: 7, name: "Bui Van G", age: 17, class: "11A2", address: "Hai Duong" },
        { id: 8, name: "Vu Thi H", age: 16, class: "10A3", address: "Ha Noi" },
        { id: 9, name: "Dang Van I", age: 15, class: "10A1", address: "Bac Ninh" },
        { id: 10, name: "Ngo Thi K", age: 17, class: "11A1", address: "Ha Nam" }
    ];

    const onEdit = (id) => {
        console.log(id);
    }

    return (
        <table width='100%' cellPadding={0} cellSpacing={0} border='1'>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.text}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                    {
                        students.map((std, index) => {
                            return (
                                <tr key={std.id}>
                                    {
                                        columns.map((col, index) => {
                                            if (col.value === 'action') {
                                                return (
                                                    <td>
                                                        <button onClick={() => onEdit(std.id)}>Edit</button>
                                                    </td>
                                                )
                                            }
                                            return <td style={col.styles} key={col.value}>{std[col.value]}</td>
                                        }
                                        )
                                    }
                                </tr>
                            )
                        })
                    }
            </tbody>
        </table>
    )
}