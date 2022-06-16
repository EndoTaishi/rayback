import styled from "styled-components"

const Timeline = () => {
    return(
        <TimelineWrapper>
            <TimelineItems>
                <TimelineItem>
                    <p>1月</p>
                    <ItemContent>
                        <h3>大会</h3>
                        <p>みんなで楽しもう</p>
                    </ItemContent>
                </TimelineItem>
                <TimelineItem>
                    <p>2月</p>
                    <ItemContent>
                        <h3>大会</h3>
                        <p>みんなで楽しもう</p>
                    </ItemContent>
                </TimelineItem>
                <TimelineItem>
                    <p>3月</p>
                    <ItemContent>
                        <h3>大会</h3>
                        <p>みんなで楽しもう</p>
                    </ItemContent>
                </TimelineItem>
                <TimelineItem>
                    <p>4月</p>
                    <ItemContent>
                        <h3>大会</h3>
                        <p>みんなで楽しもう</p>
                    </ItemContent>
                </TimelineItem>
                <TimelineItem>
                    <p>5月</p>
                    <ItemContent>
                        <h3>大会</h3>
                        <p>みんなで楽しもう</p>
                    </ItemContent>
                </TimelineItem>
            </TimelineItems>
        </TimelineWrapper>
    )
};

const TimelineWrapper = styled.div`
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