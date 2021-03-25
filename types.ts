export interface Jobs {
    id: string;
    title: string;
    position: string;
    from: string;
    until: string;
    description: string;
    publishedAt: string;   
    createdAt: string;
    revisedAt: string;
    updatedAt: string;
}

export interface MyInfo {
    description: string;
    from: string;
    age: string;
    address: string;
    hobby: string;
    image: {
        url: string;
        height: number;
        width: number;
    }
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
}

export interface Stack {
    id: string;
    stack: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
}