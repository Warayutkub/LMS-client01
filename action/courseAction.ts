const fetchCourses = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/course",{
            method : 'GET'
        });
        if (!response.ok) {
            // throw new Error(`HTTP error! status: ${response.status}`);
            return null;
        }
        const courses = await response.json();
        // console.log(courses);
        return courses;
    } catch (error) {
        // console.error("Error fetching courses:", error);
        return null;
    }
};

export default fetchCourses;