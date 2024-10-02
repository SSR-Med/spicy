// Dependencies
import { Pagination } from '@mui/material';
import { useState, useEffect } from 'react';
// Css
import "/src/static/css/team/team.css"
// Components
import { createHomeFooter } from "../../components/home/HomeComponent"
import { createTeamCardGroup } from "../../components/team/TeamComponent"
import { getCardsByUser } from "../../components/team/actions"

interface TeamProps {
    isSelection: boolean,
}

export default function Team({ isSelection }: TeamProps){
    //Page
    const [page, setPage] = useState(1);
    const [userCard, setUserCards] = useState<any>([]);
    const [amountPages, setAmountPages] = useState(0);

    useEffect(() => {
        if (userCard.length === 0) {
            getCardsByUser().then((cards) => {
                setUserCards(cards);
                setAmountPages(Math.ceil(cards.length / 4));
            });
        }
    }, []);

    return (
        <div className="team">
            <main className="team-main" style={{height: isSelection? "100%" : "90%"}}>
                <div className="team-main-container">
                    {isSelection? createTeamCardGroup(page, true,amountPages) : createTeamCardGroup(page, false, amountPages)}
                </div>
                <div className='team-main-pagination'>
                        <Pagination count={amountPages} color="primary" page={page}
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