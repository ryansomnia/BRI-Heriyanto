-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 02 Jul 2020 pada 11.59
-- Versi server: 10.3.16-MariaDB
-- Versi PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_keluarga_berencana`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `list_kontrasepsi`
--

CREATE TABLE `list_kontrasepsi` (
  `Id_Kontrasepsi` int(11) NOT NULL,
  `Nama_Kontrasepsi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `list_kontrasepsi`
--

INSERT INTO `list_kontrasepsi` (`Id_Kontrasepsi`, `Nama_Kontrasepsi`) VALUES
(1, 'Pil'),
(2, 'Kondom'),
(3, 'IUD');

-- --------------------------------------------------------

--
-- Struktur dari tabel `list_pemakai_kontrasepsi`
--

CREATE TABLE `list_pemakai_kontrasepsi` (
  `Id_List` int(11) NOT NULL,
  `Id_Propinsi` int(11) DEFAULT NULL,
  `Id_Kontrasepsi` int(11) DEFAULT NULL,
  `Jumlah_Pemakai` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `list_pemakai_kontrasepsi`
--

INSERT INTO `list_pemakai_kontrasepsi` (`Id_List`, `Id_Propinsi`, `Id_Kontrasepsi`, `Jumlah_Pemakai`) VALUES
(4, 1, 1, 50),
(5, 1, 2, 66),
(8, 1, 3, 25),
(9, 2, 1, 100),
(10, 2, 2, 75),
(11, 2, 3, 50),
(14, 1, 2, 40),
(15, 2, 2, 65),
(16, 3, 1, 90),
(24, 1, 1, 201),
(25, 1, 1, 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `list_propinsi`
--

CREATE TABLE `list_propinsi` (
  `id_propinsi` int(11) NOT NULL,
  `nama_propinsi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `list_propinsi`
--

INSERT INTO `list_propinsi` (`id_propinsi`, `nama_propinsi`) VALUES
(1, 'Aceh'),
(2, 'Sumatera Utara'),
(3, 'Sumatera Barat'),
(4, 'Riau'),
(5, 'Kepulauan Riau'),
(6, 'Jambi'),
(7, 'Bangka Belitung'),
(8, 'Sumatera Selatan'),
(9, 'Lampung');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `list_kontrasepsi`
--
ALTER TABLE `list_kontrasepsi`
  ADD PRIMARY KEY (`Id_Kontrasepsi`);

--
-- Indeks untuk tabel `list_pemakai_kontrasepsi`
--
ALTER TABLE `list_pemakai_kontrasepsi`
  ADD PRIMARY KEY (`Id_List`),
  ADD KEY `Id_Propinsi` (`Id_Propinsi`,`Id_Kontrasepsi`),
  ADD KEY `Id_Kontrasepsi` (`Id_Kontrasepsi`);

--
-- Indeks untuk tabel `list_propinsi`
--
ALTER TABLE `list_propinsi`
  ADD PRIMARY KEY (`id_propinsi`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `list_kontrasepsi`
--
ALTER TABLE `list_kontrasepsi`
  MODIFY `Id_Kontrasepsi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `list_pemakai_kontrasepsi`
--
ALTER TABLE `list_pemakai_kontrasepsi`
  MODIFY `Id_List` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `list_propinsi`
--
ALTER TABLE `list_propinsi`
  MODIFY `id_propinsi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `list_pemakai_kontrasepsi`
--
ALTER TABLE `list_pemakai_kontrasepsi`
  ADD CONSTRAINT `list_pemakai_kontrasepsi_ibfk_1` FOREIGN KEY (`Id_Propinsi`) REFERENCES `list_propinsi` (`id_propinsi`),
  ADD CONSTRAINT `list_pemakai_kontrasepsi_ibfk_2` FOREIGN KEY (`Id_Kontrasepsi`) REFERENCES `list_kontrasepsi` (`Id_Kontrasepsi`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
