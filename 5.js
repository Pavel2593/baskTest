array = [1, 2, 3, 4, 5, 6, 7]

const getById = async (id) => {
    try {
        return id
    } catch (e) {
        console.log(e)
    }
}

array.map(async (item) => {
    const id = await getById(item)
})