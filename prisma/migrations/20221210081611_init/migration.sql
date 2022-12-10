-- CreateTable
CREATE TABLE `Content` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contentName` VARCHAR(255) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAte` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
