import React, { useState } from "react";

export const UserNameFrom = () => {
    const [value, setValue] = useState<string>();
    return <div>
        <form onSubmit={() => {
            // do we save the name in the db?
        }}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" />
        </form>
    </div>
}