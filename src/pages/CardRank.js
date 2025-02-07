import React from "react";
import Header from "../component/Header";
import RankItem from "../component/RankItem";
const CardRank = () => {
    
    return(
    <>
        <Header />
        <section className="position-relative overflow-hidden pb-0 pt-xl-9">
            <div className="container pt-4 pt-sm-5">
                <div className="CardRank mb-3">
                    <h1 className="text-center">이 달의 카드 TOP 5</h1>
                    <p className="text-center">스마트 페이 고객님들이 가장 많이 사용한 카드에요.</p>
                </div>
                <div className="py-3">
                <RankItem/>

                </div>
            </div>
        </section>
    </>
)
}
export default CardRank;