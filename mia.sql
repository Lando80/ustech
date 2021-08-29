-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 30-Ago-2021 às 00:39
-- Versão do servidor: 10.4.19-MariaDB
-- versão do PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `mia`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `contribuinte`
--

CREATE TABLE `contribuinte` (
  `nome` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `cpf` int(11) NOT NULL,
  `Telefone` varchar(50) DEFAULT NULL,
  `Telefone1` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `contribuinte`
--

INSERT INTO `contribuinte` (`nome`, `email`, `cpf`, `Telefone`, `Telefone1`) VALUES
('ROBERTO', 'rebousas@gmail.com', 53867242, '991336541', '992365544'),
('MARIA', 'maria.almeida@gmail.com', 210297261, '992952233', '991442363');

-- --------------------------------------------------------

--
-- Estrutura da tabela `logradouro`
--

CREATE TABLE `logradouro` (
  `logradouro_PK` int(11) NOT NULL,
  `bairro` varchar(50) DEFAULT NULL,
  `complemento` varchar(50) DEFAULT NULL,
  `rua` varchar(50) DEFAULT NULL,
  `num` varchar(50) DEFAULT NULL,
  `cep` varchar(50) DEFAULT NULL,
  `cpf_FK` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `logradouro`
--

INSERT INTO `logradouro` (`logradouro_PK`, `bairro`, `complemento`, `rua`, `num`, `cep`, `cpf_FK`) VALUES
(1, 'CENTRO', NULL, 'APARECIDA', '53', '69048200', 210297261),
(2, 'FLORES', NULL, 'DAS ACASSICAS', '40', '69048158', 53867242);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `contribuinte`
--
ALTER TABLE `contribuinte`
  ADD PRIMARY KEY (`cpf`);

--
-- Índices para tabela `logradouro`
--
ALTER TABLE `logradouro`
  ADD PRIMARY KEY (`logradouro_PK`),
  ADD KEY `cpf_FK` (`cpf_FK`);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `logradouro`
--
ALTER TABLE `logradouro`
  ADD CONSTRAINT `logradouro_ibfk_1` FOREIGN KEY (`cpf_FK`) REFERENCES `contribuinte` (`cpf`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
