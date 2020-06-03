import React, { Component } from "react";

import Badge from 'react-bootstrap/Badge'

const Tag = ({ tags }) => tags.map(tag => (
    <Badge
        variant="info">{ tag }
    </Badge>
))


export default Tag; 