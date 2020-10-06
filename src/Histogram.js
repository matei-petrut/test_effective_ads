import React from "react";
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { AxisBottom, AxisTop } from '@visx/axis';
import { scaleBand } from '@visx/scale';

import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
{
  allPosts(count: 1000) {
    id
    createdAt
  }
}
`
export const purple3 = '#a44afe';

function Histogram() {

    const { loading, error, data } = useQuery(GET_POSTS);
    const posts = new Array(12);

    for (let i = 0; i < posts.length; i++) {
        posts[i] = 0;
    }

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
    }

    data.allPosts.map(post => {
        const date = new Date(post.createdAt * 1000);
        
        return posts[date.getMonth()]++;
    });

    console.log(posts);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];
    const colors = ["#7120df", "#26a0d9", "#27d888", "#6de01f", "#F5FF00", "#de6e21", "#e8173a", "#FF000A", "#e90cf3", "#175FE8", "#FF004D", "#00FF10"];

    // Define the graph dimensions and margins
    const width = 900;
    const height = 850;
    const margin = { top: 20, bottom: 0, left: 0, right: 0 };



    // Then we'll create some bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    const dateScale = scaleBand({
        range: [0, xMax],
        domain: months,
    });

    const postsScale = scaleBand({
        range: [0, xMax],
        domain: posts,
    });

    postsScale.rangeRound([0, xMax]);

    return (
        <svg width={width} height={height} style={{position: "absolute", left: "50%", transform: "translate(-50%, 0)"}}>
            {posts.map((d, i) => {
            const barHeight = d * 7;
            return (
                <Group key={`bar-${i}`}>
                <Bar
                    x={i*(xMax/12)}
                    y={yMax - barHeight-10}
                    height={barHeight}
                    width={width/12}
                    fill={colors[i]}
                />
                </Group>
            );
            })}
            <AxisBottom
                top={yMax-10}
                scale={dateScale}
                stroke={purple3}
                tickStroke={purple3}
                tickLabelProps={() => ({
                    fill: purple3,
                    fontSize: 15,
                    textAnchor: 'middle',
                })}
            />
            <AxisTop
                top={30}
                scale={postsScale}
                //tickFormat={formatDate}
                stroke={purple3}
                tickStroke={purple3}
                tickLabelProps={() => ({
                    fill: purple3,
                    fontSize: 15,
                    textAnchor: 'middle',
                })}
            />
        </svg>
    );
}

export default Histogram;
