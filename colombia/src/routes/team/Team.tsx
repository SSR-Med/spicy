// Dependencies
import { Pagination } from '@mui/material';
import { useState } from 'react';
// Css
import "/src/static/css/team/team.css"
// Components
import { createHomeFooter } from "../../components/home/HomeComponent"
import { createTeamCardGroup } from "../../components/team/TeamComponent"

interface TeamProps {
    isSelection: boolean,
}

export default function Team({ isSelection }: TeamProps){
    //Page
    const [page, setPage] = useState(1);

    return (
        <div className="team">
            <main className="team-main" style={{height: isSelection? "100%" : "90%"}}>
                <div className="team-main-container">
                    {isSelection? createTeamCardGroup(page, true) : createTeamCardGroup(page, false)}
                </div>
                <div className='team-main-pagination'>
                        <Pagination count={4} color="primary" page={page}
                        onChange={
                            (event, newPage) => {
                                setPage(newPage);
                            }
                        }/>
                    </div>
            </main>
            {isSelection ? null : createHomeFooter()}
        </div>
    )
}