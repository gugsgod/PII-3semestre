package models

type Aluno struct {
	ID				string `json:"id"`
	Nome 			string `json:"nome"`
	DataNasc		string `json:"dataNasc"`
}

type NomeAluno struct{
	ID			int 	`json:"id"`
	NOME		string  `json:"nome"`
}

