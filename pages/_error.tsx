import * as http from "http"; // need it for type of res
import * as React from "react";

export const Error: React.SFC<{
    statusCode: number;
}> = ({ statusCode }) => (
    <p className="error">
        {statusCode
            ? `An error ${statusCode} occurred on server`
            : "An error occurred on client"}
    </p>
);

(Error as any).getInitialProps = async ({
    res,
    err,
}: {
    res: http.ServerResponse;
    err: any;
}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
};
