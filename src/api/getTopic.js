import axios from "axios";
import { mapRootTopic } from '../utils/rootTopic';

export const getTopic = async (topic) => {
    const sectionTest = await axios.post("https://api-estudyme.koolsoft.ga/api/offset-topics-by-parent-id", {
        "courseId": "6112209e1e6e0c7cbe105841",
        "parentId": topic in mapRootTopic ? mapRootTopic[topic] : topic,
        "userId": "61122f351e6e0c7cbe1058eb",
        "field": "orderIndex",
        "skip": 0,
        "limit": 20
    });
    return sectionTest.data.data;
}