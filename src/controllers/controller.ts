import { Request, Response } from "express";
import notion from "../client/notion";
import 'dotenv/config'
import { json } from "stream/consumers";

console.log(process.env.DATABASE_ID)
export const all = async (req: Request, res: Response) => {
    try {
        const response = await notion.databases.query({
            database_id: process.env.DATABASE_ID ?? ''
        });
        res.json(response);
    } catch (error) {
        res.status(500).json('Falha inesperada')
        console.error('Erro ao criar dados:', error); 
    }
}

export const retriveProperties = async (req: Request, res: Response) => {
    try {
        const response = await notion.databases.retrieve({
            database_id: process.env.DATABASE_ID ?? ''
        })
        res.json(response);
    } catch (error) {
        res.status(500).json('Falha inesperada')
        console.error('Erro ao criar dados:', error);
    }
}


export const create = async (req: Request, res: Response) => {
    try {
        const data = req.body;

        const response = await notion.pages.create({
            parent: {
                database_id: process.env.DATABASE_ID ?? '',
            },
            properties: {
                Content: {
                    rich_text: [
                        {
                            text: {
                                content: data.content,
                            },
                        },
                    ],
                },
                Language: {
                    select: {
                        name: data.language,
                    },
                },
                'image content': {
                    rich_text: [
                        {
                            text: {
                                content: data.image_content,
                            },
                        },
                    ],
                },
                Image: {
                    files: [
                        ...data.image.files
                    ],
                },
                Description: {
                    rich_text: [
                        {
                            text: {
                                content: data.description,
                            },
                        },
                    ],
                },
                Campaign: {
                    rich_text: [
                        {
                            text: {
                                content: data.campaign,
                            },
                        },
                    ],
                },
                Where: {
                    rich_text: [
                        {
                            text: {
                                content: data.where,
                            },
                        },
                    ],
                },
                PlannedDate: {
                    date: {
                        start: data.plannedDate,
                    },
                },
                Company: {
                    title: [
                        {
                            text: {
                                content: data.company,
                            },
                        },
                    ],
                },
            },
        });
        res.json(response);
    } catch (error) {
        res.status(500).json(error)
        console.error('Erro ao buscar propriedades do banco de dados:', error);
    }

}


export const update = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const id = req.params.id;
        if (!id) {
            res.json('Por favor, forneça um id válido');
            return;
        }
        const response = notion.pages.update({
            page_id: id,
            properties: {
                Content: {
                    rich_text: [
                        {
                            text: {
                                content: data.content,
                            },
                        },
                    ],
                },
                Language: {
                    select: {
                        name: data.language,
                    },
                },
                'image content': {
                    rich_text: [
                        {
                            text: {
                                content: data.image_content,
                            },
                        },
                    ],
                },
                Image: {
                    files: [
                        ...data.image.files
                    ],
                },
                Description: {
                    rich_text: [
                        {
                            text: {
                                content: data.description,
                            },
                        },
                    ],
                },
                Campaign: {
                    rich_text: [
                        {
                            text: {
                                content: data.campaign,
                            },
                        },
                    ],
                },
                Where: {
                    rich_text: [
                        {
                            text: {
                                content: data.where,
                            },
                        },
                    ],
                },
                PlannedDate: {
                    date: {
                        start: data.plannedDate,
                    },
                },
                Company: {
                    title: [
                        {
                            text: {
                                content: data.company,
                            },
                        },
                    ],
                },
            } as Record<string, any>
        });
        res.json(response);
    } catch (error) {
        console.error('Erro ao atualizar dados:', error);
    }
}


export const get = async (req: Request, res: Response) => {
    if (!req.params.id) {
        res.json('Por favor, forneça um id válido');
        return;
    }
    const response = await notion.pages.retrieve({
        page_id: req.params.id
    })
}

export const deleteData = async (req: Request, res: Response) => {
    
    const id = req.params.id;
    if (!id) {
        res.json('Por favor, forneça um id válido');
        return;
    }
    const response = await notion.pages.update({
        page_id: id,
        archived: false, // Define como arquivada
    });
    
    res.json(response);
}