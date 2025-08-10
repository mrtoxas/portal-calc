import styled from "./card.module.css"

interface CardInterface {
  children: React.ReactNode;
}

export const Card = ({children}: CardInterface) => {
  return (
    <div className={styled.card}>
      <div className={styled.content}>
        {children}
      </div>
    </div>
  )
}