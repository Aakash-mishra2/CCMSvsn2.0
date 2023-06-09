import React from "react";
import Card from "../../shared/UIelements/Card";
import './styles/CitizenList.css';
import CitizenItem from "./CitizenItem";

export default function CitizenList(props) {
    if (props.users.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No Citizens found.</h2>
                </Card>
            </div>
        );
    }
    return (
        <ul className="citizens-list">
            {
                props.users.map((plaintiff) => {
                    return (
                        <CitizenItem
                            id={plaintiff.id}
                            name={plaintiff.name}
                            imgURL={plaintiff.image}
                            caseCount={plaintiff.cases}
                        />
                    )
                }
                )
            }
        </ul>
    )
}