import styled from "styled-components"

const Timeline = () => {
    return(
        <TimelineWrapper>
            <Title>
                年間予定
            </Title>
            <TimelineItems>
                <TimelineItem>
                    <p>4月</p>
                    <ItemContent>
                        <h3>新歓BBQ</h3>
                        <p>みんなで楽しもう</p>
                    </ItemContent>
                </TimelineItem>
                <TimelineItem>
                    <p>5月</p>
                    <ItemContent>
                        <h3>新歓合宿</h3>
                        <p>みんなで楽しもう</p>
                    </ItemContent>
                </TimelineItem>
                <TimelineItem>
                    <p>7月</p>
                    <ItemContent>
                        <h3>大会合宿</h3>
                        <p>みんなで楽しもう</p>
                    </ItemContent>
                </TimelineItem>
                <TimelineItem>
                    <p>9月</p>
                    <ItemContent>
                        <h3>夏合宿</h3>
                        <p>みんなで楽しもう</p>
                    </ItemContent>
                </TimelineItem>
                <TimelineItem>
                    <p>9月</p>
                    <ItemContent>
                        <h3>わせ杯</h3>
                        <p>みんなで楽しもう</p>
                    </ItemContent>
                </TimelineItem>
                <TimelineItem>
                    <p>12月</p>
                    <ItemContent>
                        <h3>冬合宿</h3>
                        <p>みんなで楽しもう</p>
                    </ItemContent>
                </TimelineItem>
                <TimelineItem>
                    <p>3月</p>
                    <ItemContent>
                        <h3>わせ杯</h3>
                        <p>みんなで楽しもう</p>
                    </ItemContent>
                </TimelineItem>
            </TimelineItems>
        </TimelineWrapper>
    )
};

const TimelineWrapper = styled.div`
    `

const Title = styled.h1`
    position: relative;
    margin: 20px 0;
    padding: 0.6em;
    background: #e0edff;

    :after{
        position: absolute;
        content: '';
        top: 100%;
        left: 30px;
        border: 15px solid transparent;
        border-top: 15px solid #e0edff;
        width: 0;
        height: 0;
    }
`

const TimelineItems = styled.ul`
`

const TimelineItem = styled.li`
    overflow: hidden;
    margin: 0;
    position: relative;

    p{
        width: 110px;
        float: left;
        margin-top: 20px;
    }
`

const ItemContent = styled.div`
    width: 75%;
    float: left;
    border-left: 3px #e5e5d1 solid;
    padding-left: 30px;

    :before {
        content: '';
        width: 12px;
        height: 12px;
        background: #6fc173;
        position: absolute;
        left: 106px;
        top: 24px;
        border-radius: 100%;
    }

    h3{
    }

    p{
    }
`

export default Timeline;