import React from 'react';
import styles from '../css/Ex7.module.css';
import data from '../data/data.json';
function Ex7Table(prop) {

    //const [langId, setLandId] = useState(prop.idx);

    const lang_list = data.lang.filter(lang => lang.subject === prop.idx);
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>교과목</th>
                    <th>난이도</th>
                </tr>
            </thead>
            <tbody>
                {lang_list.map(lang => (
                    <tr key={lang.id}>
                        <td>{lang.title}</td>
                        <td>{lang.level}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Ex7Table;
