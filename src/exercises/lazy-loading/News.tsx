import React from'react'

export default function News({footer}: {footer: string}) {
    return (
        <>
            <ul style={{textAlign: 'left'}}>
                <li>Use a map for symbol values.</li>
                <li>Traverse the string from left to right.</li>
                <li>If a symbol is less than the next, subtract it. Otherwise, add it.</li>
                <li>{footer}</li>
            </ul>
        </>
    )
}
