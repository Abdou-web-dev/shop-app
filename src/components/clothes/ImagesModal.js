


export default function ImagesModal() {
    const [items, setItems] = useState([
        { id: 1, name: "ahmad", content: "hi this is ahmad", show: false },
        { id: 2, name: "zahid", content: "hi this is zahid", show: false }
    ]);
    const handleShow = (id) => {
        const elementsIndex = items.findIndex((element) => element.id === id);
        let newArray = [...items];
        newArray[elementsIndex] = {
            ...newArray[elementsIndex],
            show: !newArray[elementsIndex].show
        };

        setItems(newArray);
    };
    const renderContent = items.map((item) => {
        return (
            <>
                <h1>{item.name}</h1>
                {item.show ? <p>{item.content}</p> : null}
                <button onClick={() => handleShow(item.id)}>Click</button>
            </>
        );
    });