// Dependencies
import { Pagination } from '@mui/material';
import { useState } from 'react';
// Css
import "/src/static/css/team/team.css"
// Components
import { createHomeFooter } from "../../components/home/HomeComponent"
import { createTeamCardGroup } from "../../components/team/TeamComponent"
export default function Team(){
    //Page
    const [page, setPage] = useState(1);

    return (
        <div className="team">
            <main className="team-main">
                <div className="team-main-container">
                    {createTeamCardGroup(page)}
                    <div className='team-main-pagination'>
                        <Pagination count={2} color="primary" page={page}
                        onChange={
                            (event, newPage) => {
                                setPage(newPage);
                            }
                        }/>
                    </div>
                </div>
            </main>
            {createHomeFooter()}
        </div>
    )
}