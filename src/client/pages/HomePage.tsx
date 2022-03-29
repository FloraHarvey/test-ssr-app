import React from 'react'
import styled from 'styled-components';
import { TButton } from '@tuxedo/react'

import './global.css'

/**
 * The home page. Nothing fancy here.
 *
 * @returns react component.
 */
export default function HomePage() {
    return (
        <Wrapper>
            <div>
                <h1>Home</h1>
                <p>The home page.</p>

                <div>
                    <TButton variant='primary'>Tuxedo button </TButton>
                </div>
                <div>
                    <TButton variant='secondary'>Tuxedo button </TButton>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    div {
        margin-top: 24px;
    }
`;
